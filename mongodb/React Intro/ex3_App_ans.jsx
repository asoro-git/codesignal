function RobotPart({ partName }) {
  return <h2>This robot has a {partName}. </h2>;
}

function App() {
  return (
    <div>
      <RobotPart partName="head" />
      <RobotPart partName="arm" />
      <RobotPart partName="leg" />
    </div>
  );
}
