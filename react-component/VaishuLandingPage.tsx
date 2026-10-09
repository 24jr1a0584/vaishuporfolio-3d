import { KageLandingPage } from "./LandingPages";
import "./threeui.css";

/**
 * Vaishu3D Landing Page Component
 * Renders Konduru Hema Sai Vaishnavi's 3D Portfolio Sanctuary with Three.js WebGL runtime.
 */
export function VaishuLandingPage(props: any) {
  return (
    <div className="shader-frame" style={{ width: "100%", height: "100vh", position: "relative" }}>
      <iframe
        src="/vaishu3d.html"
        title="Konduru Hema Sai Vaishnavi — 3D Portfolio Sanctuary"
        style={{ width: "100%", height: "100%", border: 0 }}
      />
    </div>
  );
}

export default VaishuLandingPage;
