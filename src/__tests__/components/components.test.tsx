import React from "react";
import * as renderer from "react-test-renderer";
import LoadingIndicator from "@/components/LoadingIndicator";
import ErrorMessage from "@/components/ErrorMessage";
import EmptyState from "@/components/EmptyState";

describe("UI Components", () => {
  describe("LoadingIndicator", () => {
    test("renders activity indicator", () => {
      let tree: renderer.ReactTestRenderer | null = null;
      renderer.act(() => {
        tree = renderer.create(<LoadingIndicator />);
      });
      // @ts-ignore
      expect(tree?.toJSON()).toBeTruthy();
    });
  });

  describe("ErrorMessage", () => {
    test("displays error message", () => {
      let tree: renderer.ReactTestRenderer | null = null;
      renderer.act(() => {
        tree = renderer.create(<ErrorMessage message="Something went wrong" />);
      });
      // @ts-ignore
      expect(tree?.toJSON()).toBeTruthy();
    });
  });

  describe("EmptyState", () => {
    test("renders empty state message", () => {
      let tree: renderer.ReactTestRenderer | null = null;
      renderer.act(() => {
        tree = renderer.create(<EmptyState />);
      });
      // @ts-ignore
      expect(tree?.toJSON()).toBeTruthy();
    });
  });
});
