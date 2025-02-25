import { TelegramUserNode } from "../../src/nodes/TelegramUserNode/TelegramUserNode.node";

describe("TelegramUserNode", () => {
  it("should be defined", () => {
    const node = new TelegramUserNode();
    expect(node).toBeDefined();
  });
}); 