
import Selection from '../Components/Selection';



function Home() {
    return (
      <div>
        <div className="flex flex-col justify-center items-center  h-4/5 opacity-80">
          <h1 className="text-9xl font-serif">WELCOME POTTERHEAD</h1>
          <h1 className="text-7xl font-serif">DIVE INTO THE WORLD OF</h1>
          <h1 className="text-7xl font-serif">THE WORLD OF</h1>
        </div>
        <Selection/>
      </div>
    );
}

export default Home;