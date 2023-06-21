interface SVG {
  name: string;
  width?: number;
}

const SVG = ({ name, width = 24 }: SVG) => {
  const svg = {
    logo: (
      <svg width={width} viewBox="0 0 84 72">
        <path d="M76.2102 60L83.1384 72H69.5692L61.9614 59.3204L51.9615 42L41.5692 24L20.7846 60H48.7317L55.6317 72H13.8564H0L6.9282 60L34.641 12L41.5692 0L48.4974 12L62.3538 36L76.2102 60Z" />
      </svg>
    ),
  }[name];
  return svg;
};

export default SVG;
