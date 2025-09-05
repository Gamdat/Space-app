import "./Home.css";
import Navbar from "../Components/Navbar";


function Home() {

  return (
<>
 <Navbar />
    <main className="home">
      <section className="home__content">

        <h5>So, you want to travel to</h5>

        <h1>Space</h1>

        <p>

          Let's face it; if you want to go to space, you might as well 

          genuinely go to outer space and not hover kind of on the edge of it. 

          Well sit back, and relax because we'll give you a truly out of this world experience!

        </p>

      </section>

      <div className="home__explore">

        <button>Explore</button>

      </div>

    </main>
</>
  );

}



export default Home;

