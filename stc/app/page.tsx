export default function Page() {
  return (
    <div style={{ textAlign: 'center', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#005aad' }}>がん看護：1年生向け学習動画</h1>
      <div style={{ maxWidth: '800px', margin: '20px auto' }}>
        <iframe 
          width="100%" 
          height="450" 
          src="https://www.youtube.com/embed/XiHppW_L8M" 
          title="YouTube video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}
        ></iframe>
      </div>
      <p>動画を視聴して、患者さんへの声掛けについて考えてみましょう。</p>
    </div>
  )
}
