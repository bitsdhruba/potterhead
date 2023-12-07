
import Selection from '../Components/Selection';



function Home() {
    return (
      <div className="min-h-screen">
        <Selection />

        <div className="text-center min-h-full mt-10 bg-zinc-700 opacity-80">
          <h1 className="text-9xl text-gray-300 font-serif">WELCOME POTTERHEAD</h1>
          <h1 className="text-7xl text-gray-300 font-serif">DIVE INTO</h1>
          <h1 className="text-7xl text-gray-300 font-serif">THE WORLD OF</h1>
        </div>
      </div>
    );
}

export default Home;