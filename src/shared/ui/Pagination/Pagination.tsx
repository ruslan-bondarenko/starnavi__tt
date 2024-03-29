"use client";

import React, { FC } from "react";
import { Button, ButtonVariantEnum } from "../Button";

import { useDispatch, useSelector } from "react-redux";
import { RootState, fetchCharacters } from "@/base/store";

type Props = {
  // next: null | string;
  // previous: null | string;
};

const Pagination: FC<Props> = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.characters);

  const handleClick = (query: string) =>
    dispatch(fetchCharacters(`/?${query.split("?")[1]}`) as any);

  return (
    <div className="pt-10 flex gap-2">
      <Button
        variant={ButtonVariantEnum.OUTLINE}
        className="w-10 h-10 font-bold"
        title="<"
        onClick={() => handleClick(data.previous as string)}
        disabled={!data.previous}
      >
        <span className="text-l font-normal">{"<"}</span>
      </Button>
      <Button
        variant={ButtonVariantEnum.OUTLINE}
        className="w-10 h-10 font-bold"
        title=">"
        onClick={() => handleClick(data.next as string)}
        disabled={!data.next}
      >
        <span className="text-l font-normal">{">"}</span>
      </Button>
    </div>
  );
};

export default Pagination;
