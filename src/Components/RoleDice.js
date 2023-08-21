import styled from "styled-components";
import dice_1 from "../images/dice_1.png";
import dice_2 from "../images/dice_2.png";
import dice_3 from "../images/dice_3.png";
import dice_4 from "../images/dice_4.png";
import dice_5 from "../images/dice_5.png";
import dice_6 from "../images/dice_6.png";

const RoleDice = ({ roleDice, currentDice }) => {
  const diceImages = {
    1: dice_1,
    2: dice_2,
    3: dice_3,
    4: dice_4,
    5: dice_5,
    6: dice_6,
  };
  const diceImage = diceImages[currentDice];
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
      <img src={diceImage} alt={`dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;