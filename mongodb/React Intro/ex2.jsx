import RobotPart from "./RobotPart";

function App() {
  return (
    <div>
      <RobotPart name="head" color="silver" />
      <RobotPart name="arms" color="gray" />
      <RobotPart name="legs" color="metallic" />
      <RobotPart name="body" color="black" />
      {/* Add a new RobotPart here */}
    </div>
  );
}

export default App;

//Stellar Navigator, let's give our React Robot a new part! Add another <RobotPart /> to the App section for the body. Give it a color of your choosing.
