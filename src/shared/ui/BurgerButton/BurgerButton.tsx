"use client";

import clsx from "clsx";
import React, { FC } from "react";

import { useAppSelector, useHeaderActions } from "@/base/store";

type Props = {
  className?: string;
};

const BurgerButton: FC<Props> = ({ className = "" }) => {
  const isMenuOpen = useAppSelector((state) => state.header.isMenuOpen);
  const { toggleMenu } = useHeaderActions();

  const handleToggle = () => {
    toggleMenu();
  };

  return (
    <button
      type="button"
      aria-label="Burger"
      className={clsx(
        "group flex h-10 w-10 items-center justify-center",
        className
      )}
      onClick={handleToggle}
    >
      <div
        className={clsx(
          "flex h-5 w-5 flex-col gap-1 items-center justify-center",
          {
            "gap-0": isMenuOpen,
          }
        )}
      >
        <div
          className={clsx(
            "ease h-0.5 w-5 transform rounded-full bg-gray-100 transition duration-300",
            { "rotate-45 translate-y-[3px]": isMenuOpen }
          )}
        />
        <div
          className={clsx(
            "ease h-0.5 w-5 transform rounded-full bg-gray-100 transition duration-300",
            { "-rotate-45 -translate-y-[2.5px]": isMenuOpen }
          )}
        />
      </div>
    </button>
  );
};

export default BurgerButton;
