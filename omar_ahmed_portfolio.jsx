export default function OmarAhmedPortfolio() {
  const projects = [
    {
      title: "SHATO — Speech-Based Robotics Control System",
      stack: ["Python", "LLaMA-3", "FastAPI", "Whisper", "Docker", "Coqui TTS", "Gradio"],
      bullets: [
        "Built a modular AI pipeline for voice-based robot control using a microservices architecture.",
        "Integrated STT (Whisper), LLM command generation (llama.cpp), validation, and TTS services.",
        "Added schema validation to improve command reliability and reduce hallucinations."
      ]
    },
    {
      title: "Spam Classification System",
      stack: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "SMOTE"],
      bullets: [
        "Developed spam detection models using SVM, Logistic Regression, and Random Forest.",
        "Applied text preprocessing, TF-IDF feature extraction, and class balancing with SMOTE.",
        "Improved spam recall from 76% to 89% and achieved 98% accuracy with Linear SVM."
      ]
    },
    {
      title: "Rainfall Prediction (Australia Dataset)",
      stack: ["Python", "Scikit-learn", "EDA", "Feature Engineering"],
      bullets: [
        "Built a binary classification pipeline on 145K+ records with 23 features.",
        "Handled missing values, outliers, encoding, and Min-Max scaling.",
        "Reached 85% accuracy, outperforming the 77.6% null baseline."
      ]
    },
    {
      title: "Alexandria Real Estate Price Prediction",
      stack: ["Python", "Selenium", "Scikit-learn"],
      bullets: [
        "Scraped apartment listings from Dubizzle Egypt using Selenium.",
        "Built Linear and Polynomial Regression models with feature engineering.",
        "Achieved 88.4% prediction accuracy."
      ]
    }
  ];

  const skills = {
    "Programming & Tools": ["Python", "Git", "GitHub", "Jupyter", "Linux"],
    "ML / AI Frameworks": ["PyTorch", "TensorFlow", "Scikit-learn", "MLflow"],
    "Specializations": ["Machine Learning", "Deep Learning", "NLP", "Transformers (BERT)", "Computer Vision"],
    "Deployment": ["FastAPI", "Docker"],
    "Data & Modeling": ["EDA", "Feature Engineering", "Model Evaluation", "Error Analysis"],
    "Databases & CS": ["SQL Server", "Java", "C++", "Data Structures & Algorithms"]
  };

  const certifications = [
    "Intermediate Python — DataCamp",
    "Intermediate SQL — DataCamp",
    "GitHub Foundations — DataCamp",
    "Understanding Cloud Computing — DataCamp"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 backdrop-blur border-b border-slate-800 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <div className="font-semibold tracking-wide">Omar Ahmed</div>
            <div className="text-xs text-slate-400">Machine Learning & AI Engineer</div>
          </div>
          <nav className="hidden md:flex gap-5 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 space-y-10">
        <section className="grid md:grid-cols-3 gap-6 items-stretch">
          <div className="md:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl">
            <p className="text-sm text-cyan-300 mb-2">Alexandria, Egypt</p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">Omar Ahmed</h1>
            <h2 className="mt-2 text-xl md:text-2xl text-slate-200">Machine Learning & AI Engineer</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Building intelligent systems in NLP, Computer Vision, and applied machine learning with a focus on
              real-world impact, clean pipelines, and deployable solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded-xl bg-cyan-400 text-slate-900 font-medium">View Projects</a>
              <a href="#contact" className="px-4 py-2 rounded-xl border border-slate-700 hover:border-slate-500">Contact Me</a>
              <a href="/Omar_Ahmed_cv.pdf" className="px-4 py-2 rounded-xl border border-slate-700 hover:border-slate-500">Download CV</a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-lg">Quick Info</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li><span className="text-slate-400">Education:</span> B.Sc. Computing & Data Science</li>
                <li><span className="text-slate-400">University:</span> Alexandria University</li>
                <li><span className="text-slate-400">Expected Graduation:</span> 2027</li>
                <li><span className="text-slate-400">GPA:</span> 3.30 / 4.00</li>
              </ul>
            </div>
            <div className="mt-5 text-xs text-slate-400">Open to AI/ML engineering opportunities and freelance projects.</div>
          </div>
        </section>

        <section id="about" className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-2xl font-semibold">About</h3>
          <p className="mt-3 text-slate-300 leading-relaxed">
            I am a Machine Learning & AI Engineer with hands-on experience in building and evaluating AI systems across
            Natural Language Processing, deep learning, and computer vision. I enjoy turning ideas into practical solutions
            using Python and modern ML tools. My work includes end-to-end NLP pipelines, transformer-based modeling,
            classical machine learning systems, and AI-powered applications with deployment-ready architectures.
          </p>
        </section>

        <section id="experience" className="space-y-4">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex justify-between gap-3 items-start">
                <div>
                  <h4 className="font-semibold">AI Engineer Intern</h4>
                  <p className="text-slate-300">M.I.A. Robotics</p>
                </div>
                <span className="text-xs text-slate-400">Aug 2025 – Oct 2025</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
                <li>Trained deep learning models with PyTorch for computer vision and NLP tasks.</li>
                <li>Applied CNNs, RNNs, and Transformers to engineering use cases.</li>
                <li>Used Linux, Git, and Docker in development and deployment workflows.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="flex justify-between gap-3 items-start">
                <div>
                  <h4 className="font-semibold">NLP Engineer Trainee</h4>
                  <p className="text-slate-300">MAIM Digital Solution</p>
                </div>
                <span className="text-xs text-slate-400">Jul 2025 – Sep 2025</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
                <li>Built end-to-end NLP pipelines for text preprocessing, classification, and sentiment analysis.</li>
                <li>Fine-tuned BERT-based transformer models for practical NLP applications.</li>
                <li>Evaluated and optimized models using standard NLP metrics.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-4">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg">
                <h4 className="font-semibold text-lg leading-snug">{p.title}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200">{tag}</span>
                  ))}
                </div>
                <ul className="mt-4 list-disc pl-5 text-sm text-slate-300 space-y-1">
                  {p.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-4">
          <h3 className="text-2xl font-semibold">Skills</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <h4 className="font-semibold">{group}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="text-sm px-3 py-1 rounded-full border border-slate-700 bg-slate-800/70">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-xl font-semibold">Certifications & Courses</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-300 space-y-1">
              {certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-xl font-semibold">Activities</h3>
            <p className="mt-3 text-slate-300"><span className="font-medium">HackerRank Team Member</span> — Alexandria University</p>
            <p className="mt-2 text-sm text-slate-300">Supported students in university courses and problem-solving sessions.</p>
          </div>
        </section>

        <section id="contact" className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-slate-800 p-4 bg-slate-950/50">
              <p className="text-slate-400">Email</p>
              <a className="text-cyan-300 hover:underline" href="mailto:omar76ahmed0@gmail.com">omar76ahmed0@gmail.com</a>
            </div>
            <div className="rounded-xl border border-slate-800 p-4 bg-slate-950/50">
              <p className="text-slate-400">Phone</p>
              <a className="text-cyan-300 hover:underline" href="tel:+201063240287">+20 106 324 0287</a>
            </div>
            <div className="rounded-xl border border-slate-800 p-4 bg-slate-950/50 md:col-span-2">
              <p className="text-slate-400">LinkedIn</p>
              <a className="text-cyan-300 hover:underline break-all" href="https://www.linkedin.com/in/omar-ahmed-mleng/" target="_blank" rel="noreferrer">linkedin.com/in/omar-ahmed-mleng</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-400 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Omar Ahmed</p>
          <p>Building AI solutions for real-world problems.</p>
        </div>
      </footer>
    </div>
  );
}
