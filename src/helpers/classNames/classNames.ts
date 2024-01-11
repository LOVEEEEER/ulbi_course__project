type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[]
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
    ...additional,
  ].join(" ");
}

console.log(
  classNames("remove-btn", { hovered: true, selectable: true, red: false }, [
    "pdg",
  ])
);

// ("remove-btn hovered selectable pdg");
