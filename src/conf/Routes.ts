import { AppRoute } from 'domain/AppRoute';
import React from 'react';
import { IndexPage } from "views/pages";

export const enum APPROUTE {
  APP_INDEX = "/"
}

export const AppRouteList : AppRoute[] = [
  { id: "app_index",    path: APPROUTE.APP_INDEX,   element: React.createElement(IndexPage) },
];