import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  PieChart,
  Pie,
  LineChart,
  Line,
  AreaChart,
  Area,
  LabelList,
} from 'recharts'
import { Reveal } from './ui'

/* Themed recharts wrappers. Dark, editorial, tabular numbers.
 * Real data only — charts here exist to make numbers legible, not decorate. */

export const CHART_COLORS = ['#3ecf8e', '#f6b745', '#e2725b', '#c084a8', '#7dd3c0', '#8a8a8f']

const AXIS = { fill: '#83817b', fontSize: 13, fontFamily: 'Geist, sans-serif' }
const GRID = '#27272c'

function ChartTooltip({ active, payload, label, unit = '' }) {
  if (!active || !payload || !payload.length) return null
  return (
    <div className="rounded-lg border border-line bg-surface px-3 py-2 shadow-card">
      {label != null && <div className="mb-1 text-xs text-ink-mute">{label}</div>}
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <span className="h-2 w-2 rounded-full" style={{ background: p.color || p.fill }} />
          <span className="text-ink-dim">{p.name}:</span>
          <span className="stat-figure text-ink">
            {typeof p.value === 'number' ? p.value.toLocaleString('es-AR') : p.value}
            {unit}
          </span>
        </div>
      ))}
    </div>
  )
}

/** Frame — titled card around any chart. */
export function ChartFrame({ title, note, children, className = '', height = 320 }) {
  return (
    <Reveal className={['w-full rounded-xl border border-line bg-surface/50 p-6', className].join(' ')}>
      {title && <h3 className="mb-1 font-display text-lg font-semibold text-ink">{title}</h3>}
      {note && <p className="mb-4 text-sm text-ink-mute">{note}</p>}
      <div style={{ height }}>{children}</div>
    </Reveal>
  )
}

/**
 * BarChartCard
 *  data: [{ name, value }]  (or use dataKey)
 *  horizontal: render as horizontal bars
 *  multicolor: color each bar from the palette
 */
export function BarChartCard({
  data,
  dataKey = 'value',
  nameKey = 'name',
  color = '#3ecf8e',
  horizontal = false,
  unit = '',
  title,
  note,
  height = 320,
  multicolor = false,
  showValues = false,
  className = '',
}) {
  return (
    <ChartFrame title={title} note={note} height={height} className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout={horizontal ? 'vertical' : 'horizontal'}
          margin={{ top: 12, right: 16, left: horizontal ? 8 : -12, bottom: 4 }}
        >
          <CartesianGrid stroke={GRID} strokeDasharray="3 3" vertical={horizontal} horizontal={!horizontal} />
          {horizontal ? (
            <>
              <XAxis type="number" tick={AXIS} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey={nameKey} tick={AXIS} axisLine={false} tickLine={false} width={130} />
            </>
          ) : (
            <>
              <XAxis dataKey={nameKey} tick={AXIS} axisLine={false} tickLine={false} interval={0} />
              <YAxis tick={AXIS} axisLine={false} tickLine={false} />
            </>
          )}
          <Tooltip cursor={{ fill: 'rgba(255,255,255,0.03)' }} content={<ChartTooltip unit={unit} />} />
          <Bar dataKey={dataKey} radius={horizontal ? [0, 6, 6, 0] : [6, 6, 0, 0]} maxBarSize={64}>
            {data.map((_, i) => (
              <Cell key={i} fill={multicolor ? CHART_COLORS[i % CHART_COLORS.length] : color} />
            ))}
            {showValues && (
              <LabelList
                dataKey={dataKey}
                position={horizontal ? 'right' : 'top'}
                fill="#b6b4ad"
                fontSize={12}
                formatter={(v) => `${v}${unit}`}
              />
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  )
}

/**
 * DonutChartCard
 *  data: [{ name, value }]
 */
export function DonutChartCard({
  data,
  title,
  note,
  unit = '',
  height = 320,
  colors = CHART_COLORS,
  centerLabel,
  className = '',
}) {
  return (
    <ChartFrame title={title} note={note} height={height} className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="58%"
            outerRadius="82%"
            paddingAngle={2}
            stroke="none"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} />
            ))}
            {centerLabel && (
              <LabelList
                position="center"
                content={() => (
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#f4f1ea"
                    fontFamily="Bricolage Grotesque, sans-serif"
                    fontWeight="700"
                    fontSize="26"
                  >
                    {centerLabel}
                  </text>
                )}
              />
            )}
          </Pie>
          <Tooltip content={<ChartTooltip unit={unit} />} />
        </PieChart>
      </ResponsiveContainer>
      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: colors[i % colors.length] }} />
            <span className="text-ink-dim">{d.name}</span>
            <span className="stat-figure text-ink">
              {d.value}
              {unit}
            </span>
          </div>
        ))}
      </div>
    </ChartFrame>
  )
}

/**
 * TrendChartCard — line or area over a category axis.
 *  data: [{ x, ...series }]
 *  series: [{ key, label, color }]
 */
export function TrendChartCard({
  data,
  series,
  xKey = 'x',
  area = false,
  unit = '',
  title,
  note,
  height = 320,
  className = '',
}) {
  const Chart = area ? AreaChart : LineChart
  return (
    <ChartFrame title={title} note={note} height={height} className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <Chart data={data} margin={{ top: 12, right: 16, left: -12, bottom: 4 }}>
          <defs>
            {series.map((s) => (
              <linearGradient key={s.key} id={`grad-${s.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={s.color} stopOpacity={0.35} />
                <stop offset="100%" stopColor={s.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid stroke={GRID} strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey={xKey} tick={AXIS} axisLine={false} tickLine={false} />
          <YAxis tick={AXIS} axisLine={false} tickLine={false} />
          <Tooltip content={<ChartTooltip unit={unit} />} />
          {series.map((s) =>
            area ? (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={s.color}
                strokeWidth={2.5}
                fill={`url(#grad-${s.key})`}
                dot={{ r: 3, fill: s.color, strokeWidth: 0 }}
                activeDot={{ r: 5 }}
              />
            ) : (
              <Line
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={s.color}
                strokeWidth={2.5}
                dot={{ r: 3, fill: s.color, strokeWidth: 0 }}
                activeDot={{ r: 5 }}
              />
            )
          )}
        </Chart>
      </ResponsiveContainer>
      {series.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {series.map((s) => (
            <div key={s.key} className="flex items-center gap-2 text-sm">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
              <span className="text-ink-dim">{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </ChartFrame>
  )
}
