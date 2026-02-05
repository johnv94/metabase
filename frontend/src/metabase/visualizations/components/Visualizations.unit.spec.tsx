import { Visualizations } from "./Visualizations";

describe("Visualizations", () => {
  it("should export the expected visualizations", () => {
    expect(Visualizations.Line).toBeDefined();
    expect(Visualizations.Bar).toBeDefined();
    expect(Visualizations.Area).toBeDefined();
    expect(Visualizations.Combo).toBeDefined();
    expect(Visualizations.Waterfall).toBeDefined();
    expect(Visualizations.Number).toBeDefined();
    expect(Visualizations.Trend).toBeDefined();
    expect(Visualizations.Progress).toBeDefined();
    expect(Visualizations.Gauge).toBeDefined();
    expect(Visualizations.Pie).toBeDefined();
    expect(Visualizations.Funnel).toBeDefined();
    expect(Visualizations.Scatter).toBeDefined();
    expect(Visualizations.Sankey).toBeDefined();
    expect(Visualizations.Row).toBeDefined();
    expect(Visualizations.Map).toBeDefined();
    expect(Visualizations.ObjectDetail).toBeDefined();
    expect(Visualizations.Text).toBeDefined();
    expect(Visualizations.Heading).toBeDefined();
    expect(Visualizations.Link).toBeDefined();
    expect(Visualizations.IFrame).toBeDefined();
  });
});
