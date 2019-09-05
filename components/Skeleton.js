import React from "react";
import { GridCell, AnimeContainer } from "../styles/AnimeStyles";

import {
  SkeletonFooter,
  SkeletonHeader,
  SkeletonImg,
  SkeletonText,
  SkeletonTextArea,
  TestingContainer
} from "../styles/SkeletonStyles";

function Skeleton({isDark}) {
  return (
    <TestingContainer isDark={isDark}>

    <AnimeContainer isDark={isDark}>
      <GridCell left={1} top={1}>
        <SkeletonImg></SkeletonImg>
      </GridCell>
      <GridCell top={1} left={2}>
        <SkeletonHeader></SkeletonHeader>
        <SkeletonText >
          <SkeletonTextArea width='85%'></SkeletonTextArea>
          <SkeletonTextArea width='85%'></SkeletonTextArea>
          <SkeletonTextArea width='65%'></SkeletonTextArea>
          <SkeletonTextArea width='35%'></SkeletonTextArea>
        </SkeletonText>
        <SkeletonFooter></SkeletonFooter>
      </GridCell>
    </AnimeContainer>
    </TestingContainer>

  );
}

export default Skeleton;
