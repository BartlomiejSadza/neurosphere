'use client';
import { GlowingEffect } from '@/components/ui/glowing-effect';

export function GlowingEffectDemo() {
  const categories = [
    {
      id: 1,
      name: 'GPT Models',
      desc: 'Fine-tuned language models',
      count: 156,
      icon: '🧠',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      name: 'Prompts',
      desc: 'Advanced AI instructions',
      count: 423,
      icon: '📝',
      color: 'bg-purple-500',
    },
    {
      id: 3,
      name: 'Chatbots',
      desc: 'Configurable AI assistants',
      count: 82,
      icon: '💬',
      color: 'bg-green-500',
    },
    {
      id: 4,
      name: 'Data Analysis',
      desc: 'Models for working with data',
      count: 64,
      icon: '📊',
      color: 'bg-amber-500',
    },
    {
      id: 5,
      name: 'Image Generation',
      desc: 'Models for generating images',
      count: 32,
      icon: '🎨',
      color: 'bg-red-500',
    },
  ];

  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<span className="text-2xl">{categories[0].icon}</span>}
        title={categories[0].name}
        description={categories[0].desc}
        count={categories[0].count}
        color={categories[0].color}
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<span className="text-2xl">{categories[1].icon}</span>}
        title={categories[1].name}
        description={categories[1].desc}
        count={categories[1].count}
        color={categories[1].color}
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<span className="text-2xl">{categories[2].icon}</span>}
        title={categories[2].name}
        description={categories[2].desc}
        count={categories[2].count}
        color={categories[2].color}
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<span className="text-2xl">{categories[3].icon}</span>}
        title={categories[3].name}
        description={categories[3].desc}
        count={categories[3].count}
        color={categories[3].color}
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<span className="text-2xl">{categories[4].icon}</span>}
        title={categories[4].name}
        description={categories[4].desc}
        count={categories[4].count}
        color={categories[4].color}
      />
    </ul>
  );
}

const GridItem = ({ area, icon, title, description, count, color }) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-neutral-800 bg-black p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={5}
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div
            className={`w-full ${color} rounded-xl p-3 flex justify-between items-center`}
          >
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {icon}
          </div>

          <p className="font-sans text-sm/[1.125rem] text-neutral-300 md:text-base/[1.375rem]">
            {description}
          </p>

          <div className="flex justify-between items-center mt-auto">
            <span className="text-neutral-400 text-sm">{count} available</span>
            <button
              type="button"
              className="text-sm text-neutral-400 hover:text-white hover:bg-neutral-800 px-4 py-1 rounded-full border border-neutral-800 transition-colors"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
