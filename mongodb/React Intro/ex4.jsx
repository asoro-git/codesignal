import RobotPart from "./RobotPart";

function App() {
  return (
    <div>
      <h1>Building a Robot</h1>
      {/* TODO: Create a RobotPart component for the robot's head with "LED Lights" */}
      <RobotPart partType="head" partDescription="LED Lights" />
      {/* TODO: Create a RobotPart component for the robot's arms with "Hydraulic Actuators" */}
      <RobotPart partType="arms" partDescription="Hydraulic Actuator" />
      {/* TODO: Create a RobotPart component for the robot's legs with "Wheeled Base" */}
      <RobotPart partType="legs" partDescription="Wheeled Base" />
    </div>
  );
}

export default App;
