import Image from 'next/image';

export default function HomePage() {
  return (
    <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
      <main className='row-start-2 flex flex-col items-center gap-[32px] sm:items-start'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <ol className='list-inside list-decimal text-center font-mono text-sm/6 sm:text-left'>
          <li className='mb-2 tracking-[-.01em]'>
            Get started by editing{' '}
            <code className='rounded bg-black/[.05] px-1 py-0.5 font-mono font-semibold dark:bg-white/[.06]'>
              src/app/page.tsx
            </code>
            .
          </li>
          <li className='tracking-[-.01em]'>
            Save and see your changes instantly.
          </li>
        </ol>
      </main>
    </div>
  );
}
