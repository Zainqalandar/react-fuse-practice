import { Avatar, Button, Chip, LinearProgress, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

const summaryCards = [
  {
    label: 'Total projects',
    value: '24',
    detail: '+12% this month',
    icon: 'heroicons-outline:briefcase',
    color: '#4f46e5',
    tint: '#eef2ff',
  },
  {
    label: 'Team members',
    value: '12',
    detail: '3 currently online',
    icon: 'heroicons-outline:users',
    color: '#0891b2',
    tint: '#ecfeff',
  },
  {
    label: 'Tasks completed',
    value: '86%',
    detail: '+8.4% this week',
    icon: 'heroicons-outline:clipboard-check',
    color: '#16a34a',
    tint: '#f0fdf4',
  },
  {
    label: 'Open requests',
    value: '18',
    detail: '5 need your review',
    icon: 'heroicons-outline:bell',
    color: '#d97706',
    tint: '#fffbeb',
  },
];

const projects = [
  { name: 'Quran Learning Portal', owner: 'Product team', progress: 78, color: '#4f46e5' },
  { name: 'Community Mobile App', owner: 'Engineering', progress: 54, color: '#0891b2' },
  { name: 'Content Library Refresh', owner: 'Design team', progress: 92, color: '#16a34a' },
];

const activity = [
  { initials: 'AK', name: 'Ayesha Khan', action: 'completed the lesson review', time: '12 min ago', color: '#8b5cf6' },
  { initials: 'MR', name: 'Musa Raza', action: 'created a new project brief', time: '48 min ago', color: '#0ea5e9' },
  { initials: 'SF', name: 'Sara Fatima', action: 'updated the content calendar', time: '2 hr ago', color: '#f97316' },
];

function SummaryCard({ label, value, detail, icon, color, tint }) {
  return (
    <Paper className="rounded-16 border-1 border-solid border-gray-200 p-20 shadow-0" elevation={0}>
      <div className="flex items-start justify-between gap-12">
        <div>
          <Typography className="text-sm font-medium" color="text.secondary">
            {label}
          </Typography>
          <Typography className="mt-8 text-4xl font-extrabold leading-none">{value}</Typography>
        </div>
        <Box
          className="flex h-44 w-44 shrink-0 items-center justify-center rounded-12"
          sx={{ backgroundColor: tint, color }}
        >
          <FuseSvgIcon size={22}>{icon}</FuseSvgIcon>
        </Box>
      </div>
      <Typography className="mt-16 text-sm font-medium" sx={{ color }}>
        {detail}
      </Typography>
    </Paper>
  );
}

function ProjectProgress({ name, owner, progress, color }) {
  return (
    <div className="py-16 first:pt-0 last:pb-0">
      <div className="flex items-center justify-between gap-16">
        <div className="min-w-0">
          <Typography className="truncate text-base font-bold">{name}</Typography>
          <Typography className="mt-4 text-sm" color="text.secondary">
            {owner}
          </Typography>
        </div>
        <Typography className="text-sm font-bold" sx={{ color }}>
          {progress}%
        </Typography>
      </div>
      <LinearProgress
        className="mt-12 h-8 rounded-full"
        value={progress}
        variant="determinate"
        sx={{
          backgroundColor: `${color}1f`,
          '& .MuiLinearProgress-bar': { backgroundColor: color },
        }}
      />
    </div>
  );
}

function DashboardPage() {
  return (
    <FusePageSimple
      header={
        <div className="container w-full px-24 py-24 sm:px-32 sm:py-28">
          <Paper
            className="overflow-hidden rounded-20 px-24 py-24 text-white sm:px-32 sm:py-28"
            elevation={0}
            sx={{
              background: 'linear-gradient(115deg, #312e81 0%, #4f46e5 52%, #0891b2 100%)',
            }}
          >
            <div className="flex flex-col justify-between gap-24 md:flex-row md:items-center">
              <div>
                <div className="flex items-center gap-8 text-sm font-medium text-indigo-100">
                  <FuseSvgIcon size={18}>heroicons-outline:sparkles</FuseSvgIcon>
                  Monday, 21 July
                </div>
                <Typography className="mt-12 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                  Welcome back, Zain!
                </Typography>
                <Typography className="mt-8 text-base text-indigo-100 sm:text-lg">
                  Here is what is happening across your workspace today.
                </Typography>
              </div>
              <Button
                className="self-start rounded-full bg-white px-20 text-base font-bold text-indigo-700 hover:bg-indigo-50 md:self-auto"
                startIcon={<FuseSvgIcon size={18}>heroicons-outline:plus</FuseSvgIcon>}
                variant="contained"
              >
                New project
              </Button>
            </div>
          </Paper>
        </div>
      }
      content={
        <Box className="container w-full px-24 pb-32 sm:px-32 sm:pb-40">
          <div className="grid gap-16 md:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
              <SummaryCard key={card.label} {...card} />
            ))}
          </div>

          <div className="mt-24 grid gap-24 xl:grid-cols-3">
            <Paper className="rounded-16 border-1 border-solid border-gray-200 p-24 shadow-0 xl:col-span-2" elevation={0}>
              <div className="flex items-start justify-between gap-16">
                <div>
                  <Typography className="text-xl font-extrabold">Weekly performance</Typography>
                  <Typography className="mt-4 text-sm" color="text.secondary">
                    Completion rate compared with last week
                  </Typography>
                </div>
                <Chip className="bg-green-50 text-sm font-bold text-green-700" label="+18.2%" size="small" />
              </div>

              <div className="mt-28 flex h-176 items-end gap-12 sm:gap-20">
                {[46, 62, 51, 78, 68, 90, 82].map((value, index) => (
                  <div className="flex flex-1 flex-col items-center gap-8" key={`day-${index + 1}`}>
                    <div className="flex h-136 w-full items-end rounded-8 bg-indigo-50 p-2">
                      <div
                        className="w-full rounded-6 bg-indigo-500 transition-all"
                        style={{ height: `${value}%` }}
                      />
                    </div>
                    <Typography className="text-xs font-medium" color="text.secondary">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                    </Typography>
                  </div>
                ))}
              </div>
            </Paper>

            <Paper className="rounded-16 border-1 border-solid border-gray-200 p-24 shadow-0" elevation={0}>
              <div className="flex items-center justify-between">
                <div>
                  <Typography className="text-xl font-extrabold">Your focus</Typography>
                  <Typography className="mt-4 text-sm" color="text.secondary">
                    Today&apos;s priorities
                  </Typography>
                </div>
                <FuseSvgIcon className="text-indigo-500" size={24}>
                  heroicons-outline:lightning-bolt
                </FuseSvgIcon>
              </div>

              <div className="mt-24 space-y-16">
                {[
                  ['Review new lesson content', 'High priority'],
                  ['Approve team requests', 'Due today'],
                  ['Plan the next sprint', 'Tomorrow'],
                ].map(([task, due]) => (
                  <div className="flex items-start gap-12" key={task}>
                    <div className="mt-2 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <FuseSvgIcon size={14}>heroicons-outline:check</FuseSvgIcon>
                    </div>
                    <div>
                      <Typography className="text-base font-bold leading-tight">{task}</Typography>
                      <Typography className="mt-4 text-sm" color="text.secondary">
                        {due}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </Paper>
          </div>

          <div className="mt-24 grid gap-24 lg:grid-cols-2">
            <Paper className="rounded-16 border-1 border-solid border-gray-200 p-24 shadow-0" elevation={0}>
              <div className="flex items-center justify-between">
                <div>
                  <Typography className="text-xl font-extrabold">Project progress</Typography>
                  <Typography className="mt-4 text-sm" color="text.secondary">
                    Active work across your teams
                  </Typography>
                </div>
                <Button className="text-sm font-bold text-indigo-600" endIcon={<FuseSvgIcon size={16}>heroicons-outline:arrow-right</FuseSvgIcon>}>
                  View all
                </Button>
              </div>
              <div className="mt-24 divide-y divide-gray-200">
                {projects.map((project) => (
                  <ProjectProgress key={project.name} {...project} />
                ))}
              </div>
            </Paper>

            <Paper className="rounded-16 border-1 border-solid border-gray-200 p-24 shadow-0" elevation={0}>
              <div className="flex items-center justify-between">
                <div>
                  <Typography className="text-xl font-extrabold">Team activity</Typography>
                  <Typography className="mt-4 text-sm" color="text.secondary">
                    Latest updates from your workspace
                  </Typography>
                </div>
                <FuseSvgIcon className="text-gray-400" size={22}>
                  heroicons-outline:dots-horizontal
                </FuseSvgIcon>
              </div>
              <div className="mt-24 space-y-20">
                {activity.map((item) => (
                  <div className="flex gap-12" key={item.name}>
                    <Avatar className="h-40 w-40 text-sm font-bold" sx={{ backgroundColor: item.color }}>
                      {item.initials}
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <Typography className="text-base leading-tight">
                        <Box component="span" className="font-bold">
                          {item.name}
                        </Box>{' '}
                        {item.action}
                      </Typography>
                      <Typography className="mt-4 text-sm" color="text.secondary">
                        {item.time}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </Paper>
          </div>
        </Box>
      }
    />
  );
}

export default DashboardPage;
