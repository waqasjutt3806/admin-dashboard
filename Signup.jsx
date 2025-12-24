import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import paper from "paper";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    paper.setup(canvas);

    let shapeGroup = new paper.Group();
    let canvasWidth, canvasHeight, canvasMiddleX, canvasMiddleY;
    let positionArray = [];

    const getCanvasBounds = () => {
      canvasWidth = paper.view.size.width;
      canvasHeight = paper.view.size.height;
      canvasMiddleX = canvasWidth / 2;
      canvasMiddleY = canvasHeight / 2;
      positionArray = [
        { x: (canvasMiddleX - 50) + canvasMiddleX / 2, y: 150 },
        { x: 200, y: canvasMiddleY },
        { x: canvasWidth - 130, y: canvasHeight - 75 },
        { x: 0, y: canvasMiddleY + 100 },
        { x: (canvasMiddleX / 2) + 100, y: 100 },
        { x: canvasMiddleX + 80, y: canvasHeight - 50 },
        { x: canvasWidth + 60, y: canvasMiddleY - 50 },
        { x: canvasMiddleX + 100, y: canvasMiddleY + 100 },
      ];
    };

    const initializeShapes = () => {
      getCanvasBounds();
      const shapePathData = [
        "M231,352l445-156L600,0L452,54L331,3L0,48L231,352",
        "M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z",
        "M0,65l16,138l96,107l270-2L470,0L337,4L0,65z",
        "M333,0L0,94l64,219L29,437l570-151l-196-42L333,0",
        "M331.9,3.6l-331,45l231,304l445-156l-76-196l-148,54L331.9,3.6z",
        "M389,352l92-113l195-43L445,48l-80,1L122.7,0L0,275.2L162,297L389,352",
        "M 50 100 L 300 150 L 550 50 L 750 300 L 500 250 L 300 450 L 50 100",
        "M 700 350 L 500 350 L 700 500 L 400 400 L 200 450 L 250 350 L 100 300 L 150 50 L 350 100 L 250 150 L 450 150 L 400 50 L 550 150 L 350 250 L 650 150 L 650 50 L 700 150 L 600 250 L 750 250 L 650 300 L 700 350",
      ];
      shapePathData.forEach((d, i) => {
        const headerShape = new paper.Path({
          strokeColor: "rgba(255,255,255,0.5)",
          strokeWidth: 2,
          parent: shapeGroup,
        });
        headerShape.pathData = d;
        headerShape.scale(2);
        headerShape.position = positionArray[i];
      });
    };

    initializeShapes();

    paper.view.onFrame = (event) => {
      if (event.count % 4 === 0) {
        shapeGroup.children.forEach((child, i) => {
          child.rotate(i % 2 === 0 ? -0.1 : 0.1);
        });
      }
    };

    paper.view.onResize = () => {
      getCanvasBounds();
      shapeGroup.children.forEach((child, i) => {
        child.position = positionArray[i];
      });
    };

    return () => {
      paper.view.onFrame = null;
      paper.view.onResize = null;
      paper.project && paper.project.remove();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // signup logic
    }, 1800);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      <div className="absolute w-full h-full -z-10 flex">
        <canvas ref={canvasRef} className="absolute w-full h-full"></canvas>
        <div className="w-1/2 h-full bg-blue-500"></div>
        <div className="w-1/2 h-full bg-purple-700"></div>
      </div>
      <div className="absolute top-0 h-full w-full flex items-center justify-center">
        <div className="w-96 p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h2>
          <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            <input type="text" placeholder="Username" className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            <input type="password" placeholder="Password" className="px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
            <div className="flex items-center text-xs text-gray-200">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              I agree to the <a href="#" className="text-blue-300 ml-1">Terms</a> & <a href="#" className="text-blue-300">Privacy</a>
            </div>
            <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-xl text-white font-semibold shadow-md hover:opacity-90 transition flex items-center justify-center" disabled={loading}>
              {loading ? (<span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>) : null}
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
            <p className="text-center text-sm text-gray-300">
              Already have an account?{" "}
              <Link to="/" className="text-blue-300 hover:underline">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
