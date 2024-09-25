import { Home } from "@/views/home/home";
import { Footer } from "@/components/layout";

function App() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <main className="flex-1 w-full max-w-5xl px-3 mx-auto">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
