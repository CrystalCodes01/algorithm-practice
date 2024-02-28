"use client";

import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="column">
            <ul>
              <li><Link href="/bracket-matcher">Bracket Matcher</Link></li>
              <li><Link href="/color-select">Color Selector</Link></li>
              <li><Link href="/find-intersection">Find Intersection</Link></li>
              <li><Link href="/input-state">Live Input State</Link></li>
              <li><Link href="/quiz-builder">Quiz Builder</Link></li>
              <li><Link href="/k-unique-characters">K Unique Characters</Link></li>
              <li><Link href="/weather-dashboard">Weather Dashboard</Link></li>
              <li><Link href="/letter-tiles">Letter Tiles</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
