export default function NoticeList({ notices }) {
  return notices.map((notice) => (
    <article className="notice-card" key={`${notice.date}-${notice.title}`}>
      <time dateTime={notice.date}>{notice.date}</time>
      <h2>{notice.title}</h2>
      <p>{notice.body}</p>
    </article>
  ));
}
