"use client";
import { useParams } from "react-router-dom";
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
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Controls from "./controls";

export default function FrameworkDetail() {
  const { framework_id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [benchmark, setBenchmark] = useState<any>([]);

   const getDetail= () => {
     setLoading(true);
     axios
       .get(`http://localhost:8000/api/frameworks/${framework_id}`)
       .then((res) => {
         if (res.data) {
           setBenchmark(res.data);
         }
         setLoading(false);
       })
       .catch((err) => {
         setError(err);
         setLoading(false);
       });
   };
   useEffect(()=>{
    getDetail()
   },[framework_id])

  return (
    <div className="mx-auto pt-20 max-w-6xl">
      <div className="px-3">
        {benchmark && benchmark?.id && (
          <>
            <section
              aria-labelledby="pricing-title"
              className="animate-slide-up-fade"
              style={{
                animationDuration: "600ms",
                animationFillMode: "backwards",
              }}
            >
              <Badge>Frameworks</Badge>
              <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-4xl dark:from-gray-50 dark:to-gray-300">
                {benchmark?.title}
              </h1>
              <p className="mt-2 mb-2  text-lg text-gray-700 dark:text-gray-400">
                {benchmark.description}
              </p>
            </section>
            <Controls
              id={framework_id}
              title={benchmark.title}
              // @ts-ignore
              enabled={benchmark.enabled}
            />
          </>
        )}
      </div>
    </div>
  );
}
