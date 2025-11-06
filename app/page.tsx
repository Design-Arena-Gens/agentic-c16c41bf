import StageScene from "./scene/StageScene";

export default function Page() {
  return (
    <main className="page">
      <div className="container">
        <StageScene />
        <section className="caption" aria-label="description">
          <h1>Live on Stage</h1>
          <p>
            A young Indian man performing passionately on stage, holding a vintage
            microphone, wearing a dark sweater and a stylish green scarf tied
            around his head. Soft blue concert lighting and a cheering audience
            with bokeh lights set an energetic, cinematic mood.
          </p>
        </section>
      </div>
      <footer className="footer">
        <span>? {new Date().getFullYear()} Cinematic Stage</span>
      </footer>
    </main>
  );
}
