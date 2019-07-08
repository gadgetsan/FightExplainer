import React from "react";
import ReactDOM from "react-dom";

import CastBar from "/src/Elements/CastBar";
import Stage from "/src/Elements/Stage";
import Character from "/src/Elements/Character";
import Location from "/src/Elements/Location";
import Movement from "/src/Elements/Movement";
import Circle from "/src/Elements/Circle";
import Step from "/src/Elements/Step";

module.exports = function() {
  return (
    <Stage aspect="1:1">
      <Location x="50" y="50">
        <Circle color="Orange" size="53" />
      </Location>
      <Location x="50" y="50">
        <Character tag="Boss" color="Orange" size="10" />
      </Location>
      <Step startAt="0" endAt="2">
        <Location x="50" y="60">
          <Character tag="BRD" color="Red" size="3" />
        </Location>
        <Movement fromX="50" fromY="61" toX="50" toY="75" time="1">
          <Character tag="AST" color="green" size="3" />
        </Movement>
        <Location x="50" y="40">
          <Character tag="DNC" color="Red" size="3" />
        </Location>
        <Movement fromX="50" fromY="39" toX="50" toY="25" time="1">
          <Character tag="WHM" color="green" size="3" />
        </Movement>
        <Location x="60" y="50">
          <Character tag="DRG" color="Red" size="3" />
        </Location>
        <Movement fromX="61" fromY="50" toX="75" toY="50" time="1">
          <Character tag="PLD" color="blue" size="3" />
        </Movement>
        <Location x="40" y="50">
          <Character tag="MNK" color="Red" size="3" />
        </Location>
        <Movement fromX="39" fromY="50" toX="25" toY="50" time="1">
          <Character tag="WAR" color="blue" size="3" />
        </Movement>
      </Step>
      <Step startAt="2" endAt="4">
        <Location x="50" y="60">
          <Character tag="BRD" color="Red" size="3" />
        </Location>
        <Movement toX="50" toY="61" fromX="50" fromY="75" time="1">
          <Character tag="AST" color="green" size="3" />
        </Movement>
        <Location x="50" y="40">
          <Character tag="DNC" color="Red" size="3" />
        </Location>
        <Movement toX="50" toY="39" fromX="50" fromY="25" time="1">
          <Character tag="WHM" color="green" size="3" />
        </Movement>
        <Location x="60" y="50">
          <Character tag="DRG" color="Red" size="3" />
        </Location>
        <Movement toX="61" toY="50" fromX="75" fromY="50" time="1">
          <Character tag="PLD" color="blue" size="3" />
        </Movement>
        <Location x="40" y="50">
          <Character tag="MNK" color="Red" size="3" />
        </Location>
        <Movement toX="39" toY="50" fromX="25" fromY="50" time="1">
          <Character tag="WAR" color="blue" size="3" />
        </Movement>
      </Step>
    </Stage>
  );
};
