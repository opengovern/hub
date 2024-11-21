"use client";
import { Badge } from "../../../components/Badge";
import { Button } from "../../../components/Button";
import { Label } from "../../../components/Label";
import { Switch } from "../../../components/Switch";
import { Tooltip } from "../../../components/Tooltip";
import { ArrowAnimated } from "../../../components/ui/ArrowAnimated";
import { Faqs } from "../../../components/ui/Faqs";
import Testimonial from "../../../components/ui/Testimonial";
import { cx } from "../../../lib/utils";
import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiSubtractLine,
  RiUserLine,
} from "@remixicon/react";
import React, { Fragment } from "react";

export default function ControlDetail() {
  const [benchmarks, setBenchmarks] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  return (
    <div className="mx-auto pt-36 max-w-6xl">
      <div className="px-3"></div>
    </div>
  );
}
