import MajorTopicsForUnderstanding from '@/components/Menu_bigItems'

export default function Knowlidge_layout({children}) {
  return (
    <main>
      <MajorTopicsForUnderstanding />
      {children}
    </main>
  )
}