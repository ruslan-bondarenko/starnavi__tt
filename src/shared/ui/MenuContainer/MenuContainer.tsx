import clsx from "clsx";
import React, { FC } from "react";

import { NavBar } from "@/components";
import { Button, ButtonVariantEnum } from "@/shared/ui";

type Props = {
  className?: string;
};

const MenuContainer: FC<Props> = ({ className = "" }) => (
  <div
    className={clsx(
      "w-full h-full border-t border-black border-opacity-20 overflow-y-auto",
      "md:rem:px-[60px] pt-6 md:pt-8 pb-10 md:rem:h-[440px]",
      className
    )}
  >
    <div className="p-10 flex flex-col gap-30">
      <NavBar className="!flex !flex-col !items-start !text-3xl" />
      <Button className="flex h-10 w-40" variant={ButtonVariantEnum.WHITE}>
        <span className="text-l font-normal">Book a call</span>
      </Button>
    </div>
  </div>
);

export default MenuContainer;
