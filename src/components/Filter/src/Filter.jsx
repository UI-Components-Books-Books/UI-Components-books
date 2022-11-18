export const Filter = ({ ...props }) => (
  <span id='hc_extension_svg_filters' {...props}>
    <svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='0'>
      <defs>
        <filter id='hc_extension_off' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='table' tableValues='0 1' />
            <feFuncG type='table' tableValues='0 1' />
            <feFuncB type='table' tableValues='0 1' />
          </feComponentTransfer>
        </filter>
        <filter id='hc_extension_highcontrast' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='gamma' exponent='3.0' />
            <feFuncG type='gamma' exponent='3.0' />
            <feFuncB type='gamma' exponent='3.0' />
          </feComponentTransfer>
        </filter>
        <filter id='hc_extension_highcontrast_back' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='gamma' exponent='0.33' />
            <feFuncG type='gamma' exponent='0.33' />
            <feFuncB type='gamma' exponent='0.33' />
          </feComponentTransfer>
        </filter>
        <filter id='hc_extension_grayscale' x='0' y='0' width='99999' height='99999'>
          <feColorMatrix
            type='matrix'
            values='0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0'
          />
          <feComponentTransfer>
            <feFuncR type='gamma' exponent='3' />
            <feFuncG type='gamma' exponent='3' />
            <feFuncB type='gamma' exponent='3' />
          </feComponentTransfer>
        </filter>
        <filter id='hc_extension_grayscale_back' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='gamma' exponent='0.33' />
            <feFuncG type='gamma' exponent='0.33' />
            <feFuncB type='gamma' exponent='0.33' />
          </feComponentTransfer>
        </filter>
        <filter id='hc_extension_invert' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='gamma' amplitude='-1' exponent='3' offset='1' />
            <feFuncG type='gamma' amplitude='-1' exponent='3' offset='1' />
            <feFuncB type='gamma' amplitude='-1' exponent='3' offset='1' />
          </feComponentTransfer>
        </filter>
        <filter id='hc_extension_invert_back' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='table' tableValues='1 0' />
            <feFuncG type='table' tableValues='1 0' />
            <feFuncB type='table' tableValues='1 0' />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type='gamma' exponent='1.7' />
            <feFuncG type='gamma' exponent='1.7' />
            <feFuncB type='gamma' exponent='1.7' />
          </feComponentTransfer>
        </filter>
        <filter id='hc_extension_yellow_on_black' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='gamma' amplitude='-1' exponent='3' offset='1' />
            <feFuncG type='gamma' amplitude='-1' exponent='3' offset='1' />
            <feFuncB type='gamma' amplitude='-1' exponent='3' offset='1' />
          </feComponentTransfer>
          <feColorMatrix type='matrix' values='0.3 0.5 0.2 0 0 0.3 0.5 0.2 0 0 0 0 0 0 0 0 0 0 1 0' />
        </filter>
        <filter id='hc_extension_yellow_on_black_back' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='table' tableValues='1 0' />
            <feFuncG type='table' tableValues='1 0' />
            <feFuncB type='table' tableValues='1 0' />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type='gamma' exponent='0.33' />
            <feFuncG type='gamma' exponent='0.33' />
            <feFuncB type='gamma' exponent='0.33' />
          </feComponentTransfer>
        </filter>
        <filter
          id='hc_extension_red_on_white'
          x='0'
          y='0'
          width='99999'
          height='99999'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feColorMatrix
            type='matrix'
            values='                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        .33 .33 .33 0 0                        0 0 0 1 0'
            in='SourceGraphic'
            result='colormatrix'
          />
          <feComponentTransfer in='colormatrix' result='componentTransfer'>
            <feFuncR type='table' tableValues='0.97 0.52' />
            <feFuncG type='table' tableValues='1 0.03' />
            <feFuncB type='table' tableValues='0.98 0.06' />
            <feFuncA type='table' tableValues='0 1' />
          </feComponentTransfer>
          <feBlend mode='normal' in='componentTransfer' in2='SourceGraphic' result='blend' />
        </filter>
        <filter id='hc_extension_red_on_white_back' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='table' tableValues='1 0' />
            <feFuncG type='table' tableValues='0 0' />
            <feFuncB type='table' tableValues='0 0' />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type='gamma' amplitude='-1' exponent='5' offset='1' />
            <feFuncG type='gamma' amplitude='-1' exponent='5' offset='1' />
            <feFuncB type='gamma' amplitude='-1' exponent='5' offset='1' />
          </feComponentTransfer>
        </filter>
        <filter
          id='hc_extension_green_on_blue'
          x='0'
          y='0'
          width='99999'
          height='99999'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feColorMatrix
            type='matrix'
            values='.33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0'
            in='SourceGraphic'
            result='colormatrix'
          />
          <feComponentTransfer in='colormatrix' result='componentTransfer'>
            <feFuncR type='table' tableValues='0.09 0' />
            <feFuncG type='table' tableValues='1 0.16' />
            <feFuncB type='table' tableValues='0 1' />
            <feFuncA type='table' tableValues='0 1' />
          </feComponentTransfer>
          <feBlend mode='normal' in='componentTransfer' in2='SourceGraphic' result='blend' />
        </filter>
        <filter id='hc_extension_green_on_blue_back' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='table' tableValues='1 0' />
            <feFuncG type='table' tableValues='0 0' />
            <feFuncB type='table' tableValues='0 0' />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type='gamma' amplitude='-1' exponent='5' offset='1' />
            <feFuncG type='gamma' amplitude='-1' exponent='5' offset='1' />
            <feFuncB type='gamma' amplitude='-1' exponent='5' offset='1' />
          </feComponentTransfer>
        </filter>
        <filter
          id='hc_extension_yellow_on_blue'
          x='0'
          y='0'
          width='99999'
          height='99999'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feColorMatrix
            type='matrix'
            values='.33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0'
            in='SourceGraphic'
            result='colormatrix'
          />
          <feComponentTransfer in='colormatrix' result='componentTransfer'>
            <feFuncR type='table' tableValues='1 0' />
            <feFuncG type='table' tableValues='0.99 0.16' />
            <feFuncB type='table' tableValues='0 1' />
            <feFuncA type='table' tableValues='0 1' />
          </feComponentTransfer>
          <feBlend mode='normal' in='componentTransfer' in2='SourceGraphic' result='blend' />
        </filter>
        <filter id='hc_extension_yellow_on_blue_back' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='table' tableValues='1 0' />
            <feFuncG type='table' tableValues='0 0' />
            <feFuncB type='table' tableValues='0 0' />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type='gamma' amplitude='-1' exponent='5' offset='1' />
            <feFuncG type='gamma' amplitude='-1' exponent='5' offset='1' />
            <feFuncB type='gamma' amplitude='-1' exponent='5' offset='1' />
          </feComponentTransfer>
        </filter>
        <filter
          id='hc_extension_white_on_black'
          x='0'
          y='0'
          width='99999'
          height='99999'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feColorMatrix
            type='matrix'
            values='.33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0'
            in='SourceGraphic'
            result='colormatrix'
          />
          <feComponentTransfer in='colormatrix' result='componentTransfer'>
            <feFuncR type='table' tableValues='1 0' />
            <feFuncG type='table' tableValues='1 0' />
            <feFuncB type='table' tableValues='0.98 0' />
            <feFuncA type='table' tableValues='0 1' />
          </feComponentTransfer>
          <feBlend mode='normal' in='componentTransfer' in2='SourceGraphic' result='blend' />
        </filter>
        <filter id='hc_extension_white_on_black_back' x='0' y='0' width='99999' height='99999'>
          <feComponentTransfer>
            <feFuncR type='table' tableValues='1 0' />
            <feFuncG type='table' tableValues='0 0' />
            <feFuncB type='table' tableValues='0 0' />
          </feComponentTransfer>
          <feComponentTransfer>
            <feFuncR type='gamma' amplitude='-1' exponent='5' offset='1' />
            <feFuncG type='gamma' amplitude='-1' exponent='5' offset='1' />
            <feFuncB type='gamma' amplitude='-1' exponent='5' offset='1' />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  </span>
)
