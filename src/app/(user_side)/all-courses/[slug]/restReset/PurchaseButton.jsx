"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ErrorBlock from "../../_components/ErrorBlock";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Loader } from "lucide-react";

const PurchaseButton = ({ courseId, coursePrice, isPurchased }) => {
  const { status } = useSession();
  const redirectToCheckout = async () => {
    const res = await fetch(`/api/checkout_sessions/${courseId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { sessionId, error } = await res.json();

    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );

    const stripeError = await stripe.redirectToCheckout({ sessionId });
  };

  if (status === "loading") {
    return (
      <Button disabled>
        <Loader className="animate-spin" />
      </Button>
    );
  }
  if (status === "unauthenticated") {
    return (
      <Button asChild>
        <Link
          href={{
            pathname: "/login",
            query: {
              callbackUrl: `/all-courses/${courseId}`,
            },
          }}
        >
          Login to Buy ${coursePrice.toString()}
        </Link>
      </Button>
    );
  }
  if (isPurchased) {
    return (
      <Button asChild>
        <Link
          href={{
            pathname: `/courses/${courseId}`,
          }}
        >
          Start Course
        </Link>
      </Button>
    );
  }
  return (
    <Button className=" text-base" onClick={redirectToCheckout}>
      Buy ${coursePrice.toString()}
    </Button>
  );
};

export default PurchaseButton;
