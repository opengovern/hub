import axios from "axios";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Label } from "../../components/Label";
import { Switch } from "../../components/Switch";
import { Tooltip } from "../../components/Tooltip";
import { ArrowAnimated } from "../../components/ui/ArrowAnimated";
import { Faqs } from "../../components/ui/Faqs";
import Testimonial from "../../components/ui/Testimonial";
import { cx, getIntegrationLogo } from "../../lib/utils";
import {
  RiCheckLine,
  RiCloudLine,
  RiInformationLine,
  RiSubtractLine,
  RiUserLine,
} from "@remixicon/react";
import React, { Fragment, useEffect, useState } from "react";
import { Benchmarks } from "./types";
import Card from "../../components/Card";
import { useNavigate } from "react-router-dom";

export default function Policies() {
  const [benchmarks, setBenchmarks] = useState<Benchmarks[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [page,setPage] = useState(1)
  const getPolcies = () => {
    setLoading(true);
    axios
      .get("http://localhost:8000/api/frameworks?per_page=15&cursor=1")
      .then((res) => {
        if (res.data) {
          setBenchmarks(res.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };
  
    useEffect(() => {
        getPolcies();
    }, []);

  return (
    <div className="mx-auto pt-36 max-w-6xl">
      <div className="px-3">
        <section
          aria-labelledby="pricing-title"
          className="animate-slide-up-fade"
          style={{
            animationDuration: "600ms",
            animationFillMode: "backwards",
          }}
        >
          <Badge>Policies</Badge>
          <h1 className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-4xl dark:from-gray-50 dark:to-gray-300">
            Our plans scale with you
          </h1>
          <p className=" mb-2  text-lg text-gray-700 dark:text-gray-400">
            Plans that empower you and your team to ship without friction. Our
            flexible pricing models ensure that efficiency doesn&rsquo;t come at
            the cost of your budget.
          </p>
        </section>
        <div className="flex gap-3 flex-col mt-5">
          {benchmarks &&
            benchmarks?.map((benchmark) => {
              return (
                <>
                  <Card
                    title={benchmark.title}
                    imageUri={getIntegrationLogo(benchmark?.integration_type)}
                    description={benchmark.description}
                    controlCount={benchmark.control_count}
                    onClick={()=>{
                        navigate("/frameworks/" + benchmark.id);
                    }}
                  />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}