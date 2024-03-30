import React, { FC } from "react";
import Link from "next/link";

import { ICharacter } from "@/shared/types";
import { getIdFromUrl } from "@/shared";

type Props = {
  character: ICharacter;
};

const ProductItem: FC<Props> = ({ character }) => {
  return (
    <Link href={`/people/${getIdFromUrl(character?.url || "")}`}>
      <h4 className="px-4 py-3 text-l font-medium truncate">
        {character?.name}
      </h4>
    </Link>
  );
};

export default ProductItem;
