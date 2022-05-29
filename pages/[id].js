import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Modal from '../components/Modal'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { getProviders, getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebase'
import Login from '../components/Login'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import Post from '../components/Post'
import Comment from '../components/Comment'

function PostPage({ trendingResults, followResults, providers }) {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)
  const router = useRouter()
  const { id } = router.query
  const [post, setPost] = useState()
  const [comments, setComments] = useState([])

  useEffect(
    () =>
      onSnapshot(doc(db, 'posts', id), (snapshot) => {
        setPost(snapshot.data())
      }),
    [db]
  )

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        )
      ),
    (snapshot) => setComments(snapshot.docs())
  )

  if (!session) return <Login providers={providers} />

  return (
    <div className="">
      <Head>
        <title>
          {post?.username} on Twitter: "{post?.text}"
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen max-w-[1500px] bg-black">
        <Sidebar />
        <div className="max-w-zxl flex-grow border-l border-r border-gray-700 sm:ml-[73px] xl:ml-[370px]">
          <div className="sticky top-0 z-50 flex items-center gap-x-4 border-b border-gray-700 bg-black px-1.5 py-2 text-xl font-semibold text-[#d9d9d9]">
            <div
              className="hoverAnimation flex h-9 w-9 items-center justify-center xl:px-0"
              onClick={() => router.push('/')}
            >
              <ArrowLeftIcon className="h-5 text-white" />
            </div>
            Tweet
          </div>

          <Post id={id} post={post} postPage />
          {comments.length > 0 && (
            <div className="pb-72">
              {comments.map((comment) => (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  comment={comment.data()}
                />
              ))}
            </div>
          )}
        </div>
        {/* Widget */}

        {isOpen && <Modal />}
      </main>
    </div>
  )
}

export default PostPage

export async function getServerSideProps(context) {
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  )

  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  )

  const providers = await getProviders()
  const session = await getSession(context)

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  }
}
