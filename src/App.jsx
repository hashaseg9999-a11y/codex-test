import React from "react";
import Section from "./components/Section.jsx";
import StepCard from "./components/StepCard.jsx";
import AlertBox from "./components/AlertBox.jsx";

const App = () =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement(
      Section,
      {
        eyebrow: "Quickstart",
        title: "Team Handbook Overview",
        subtitle: "Modern, readable layout for rules, cautions, and step-by-step guidance.",
      },
      React.createElement(
        "div",
        { className: "stack" },
        React.createElement(
          "div",
          { className: "content" },
          React.createElement(
            "p",
            null,
            "Welcome! This sample home screen demonstrates how Section, StepCard, and AlertBox work together with the global styles. Everything below uses the shared spacing scale, typography, and card/callout treatments."
          )
        ),
        React.createElement(
          AlertBox,
          { title: "Rule of thumb", variant: "info" },
          "Keep instructions short, scannable, and grouped by purpose so teams can act quickly."
        ),
        React.createElement(
          "div",
          { className: "stack" },
          React.createElement(
            StepCard,
            { step: 1, title: "Review the daily checklist", meta: "2 minutes" },
            React.createElement(
              "ul",
              { className: "step-list" },
              React.createElement(
                "li",
                { className: "step-list__item" },
                "Confirm the owner and priority for each open item."
              ),
              React.createElement(
                "li",
                { className: "step-list__item" },
                "Note blockers or dependencies in the shared tracker."
              )
            )
          ),
          React.createElement(
            StepCard,
            { step: 2, title: "Share cautions", meta: "Before you ship" },
            React.createElement(
              AlertBox,
              { title: "Caution", variant: "warning" },
              "Escalate any changes that impact payments or privacy before release."
            ),
            React.createElement(
              AlertBox,
              { title: "Needs attention", variant: "danger" },
              "Rotate on-call coverage if the response time exceeds the SLA."
            )
          ),
          React.createElement(
            StepCard,
            { step: 3, title: "Celebrate wins", meta: "Wrap-up" },
            React.createElement(
              AlertBox,
              { title: "Success", variant: "success" },
              "Share one highlight from the week to keep momentum high."
            )
          )
        )
      )
    )
  );

export default App;
