import React from "react";
import { useState, useEffect } from "react";
import { GetChirps } from "../../server/routes/chirpstore";

interface chirpInterface {
  id: string;
  user: string;
  message: string;
}

export const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const [chirps, setChirps] = React.useState<chirpInterface[]>([]);

  React.useEffect(() => {
    getChirps();
  }, []);

  const getChirps = async () => {
    let response = await fetch("/api/chirps");
    let chirps = await response.json();
    setChirps(chirps);
  };

  return (
    <main className="container">
      <div className="row">
        {chirps.map((chirp) => (
          <div className="card text-dark m-1 col-md-3">
            <div className="card-body">
              <p>
                <span className="card-title badge bg-success">
                  {chirp.user}
                </span>
                <span className="small text-muted mb-0">
                  {/* Placeholder for small muted text / previously was date&time stamps */}
                </span>
              </p>
              <p className="card-text">{chirp.message}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

interface HomeProps {}

export default Home;