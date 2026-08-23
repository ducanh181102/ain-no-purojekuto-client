import { Component } from "@/constants/props/components";

export type Component = typeof Component[keyof typeof Component];

