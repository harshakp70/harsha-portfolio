export const SERVICES = [
  {
    id: 'web',
    title: 'Web Specialist',
    subtitle: 'High-performance interactive web products',
    description: 'Creating scalable, responsive web applications using React, Next.js, and modern CSS frameworks. Focused on core web vitals and seamless UX.',
    iconType: 'web',
    tags: [
      { name: 'REACT', highlight: false },
      { name: 'NEXT.JS', highlight: false },
      { name: 'TAILWIND', highlight: true }
    ],
    skills: [
      'Single Page Applications (SPAs)',
      'Server-Side Rendering (SSR / ISR)',
      'State Management (Zustand, Redux)',
      'Tailwind CSS v4 & CSS Modules',
      'Webpack & Vite Bundler Configuration',
      'Accessibility (WCAG 2.1 AA Checklist)'
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Expert',
    subtitle: 'Polished cross-platform natively compiled applications',
    description: 'Developing cross-platform native applications with React Native and Expo. Delivering smooth animations and native-feel performance for iOS and Android.',
    iconType: 'mobile',
    tags: [
      { name: 'REACT NATIVE', highlight: false },
      { name: 'EXPO', highlight: false },
      { name: 'FIREBASE', highlight: true }
    ],
    skills: [
      'React Native / Expo Workflow',
      'Declarative Animations with Reanimated 3',
      'Natively bridged native modules',
      'Offline-First Syncing & WatermelonDB',
      'Apple App Store & Google Play Releases',
      'Push Notifications & Deeplinking Pipelines'
    ]
  }
];

export const PROJECTS = [
  {
    id: 'nexus-fintech',
    title: 'Nexus Fintech',
    category: 'MOBILE APP',
    tagline: 'Empowering smart asset operations on-the-go.',
    description: 'Real-time portfolio tracking and asset management built with React Native and Reanimated.',
    longDescription: 'Nexus Fintech is an all-in-one wallet monitoring and security interface designed to handle real-time Web3 and traditional equities asset pipelines. Equipped with localized database caches, biometrics authentication, and fluid transition schemas via Reanimated.',
    type: 'mobile',
    mockType: 'tablet',
    tag: 'MOBILE APP',
    techLabel: 'TypeScript',
    techStack: ['React Native', 'Expo', 'Reanimated', 'TypeScript', 'Tailwind CSS', 'WatermelonDB'],
    metrics: [
      { label: 'Render Frame Latency', value: '16.6ms (60fps lock)' },
      { label: 'Time-to-Interactive', value: '0.9 seconds' },
      { label: 'User Rating', value: '4.8★ (App Store)' }
    ],
    features: [
      'Real-time low-latency financial charts powered by Skia Canvas.',
      'Offline synchronization with localized encryption using AES-256-GCM.',
      'Dynamic keyframe motion systems designed to minimize CPU usage.'
    ],
    codeFiles: [
      {
        name: 'NexusTracker.tsx',
        language: 'typescript',
        snippet: `import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { View, Text } from 'react-native';

export function NexusMetricCard({ label, value }) {
  const scale = useSharedValue(0.95);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    scale.value = withSpring(1, { damping: 12 });
    opacity.value = withSpring(1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[animatedStyle, { padding: 16, backgroundColor: '#1E293B', borderRadius: 12 }]}>
      <Text style={{ color: '#94A3B8', fontSize: 13 }}>{label}</Text>
      <Text style={{ color: '#F8FAFC', fontSize: 24, fontWeight: 'bold', marginTop: 4 }}>{value}</Text>
    </Animated.View>
  );
}`
      }
    ]
  },
  {
    id: 'vanguard-commerce',
    title: 'Vanguard Commerce',
    category: 'WEB DEVELOPMENT',
    tagline: 'Redefining the speed of digital commerce scaling.',
    description: 'Next-generation headless storefront using Next.js, Shopify Hydrogen, and Tailwind CSS.',
    longDescription: 'Vanguard Commerce offers an ultra-optimized headless retail framework syncing Shopify backend capabilities instantly using Hydrogen. Complete with incremental static regeneration, localized cart systems, and edge-side geolocation routing.',
    type: 'web',
    mockType: 'laptop1',
    tag: 'WEB DEVELOPMENT',
    techLabel: 'Next.js',
    techStack: ['Next.js', 'Hydrogen', 'Shopify Storefront API', 'Tailwind CSS', 'Vercel Edge'],
    metrics: [
      { label: 'Core Web Vitals LCP', value: '0.85 seconds' },
      { label: 'Commerce Conversion Lift', value: '34%' },
      { label: 'Google Lighthouse Score', value: '100 / 100' }
    ],
    features: [
      'Dynamic instant search matching over 10,000 SKUs within 40ms.',
      'Server-side rendered dynamic pages with stale-while-revalidate caches.',
      'Adaptive image scaling pipelines deploying Next Image components.'
    ],
    codeFiles: [
      {
        name: 'edge-cart.js',
        language: 'javascript',
        snippet: `export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const country = req.geo?.country || 'US';
  const currency = country === 'CA' ? 'CAD' : country === 'GB' ? 'GBP' : 'USD';
  
  // Set localized pricing context in cookie
  const response = NextResponse.next();
  response.cookies.set('user-locale', country);
  response.cookies.set('user-currency', currency);
  return response;
}`
      }
    ]
  },
  {
    id: 'lumina-analytics',
    title: 'Lumina Analytics',
    category: 'WEB APP',
    tagline: 'Unified customer insights with visual feedback systems.',
    description: 'Complex data visualization platform for enterprise marketing teams with heavy React usage.',
    longDescription: 'Lumina Analytics compiles disparate tracking vectors from ad exchanges into single visual streams. Leveraging custom Canvas nodes, optimized React transitions, list virtualizations, and reactive caches via React Query.',
    type: 'web',
    mockType: 'laptop2',
    tag: 'WEB APP',
    techLabel: 'React Query',
    techStack: ['React', 'React Query / TanStack', 'D3.js', 'Vite', 'Tailwind CSS', 'Recharts'],
    metrics: [
      { label: 'Max Dataset Render Pool', value: '1,000,000+ nodes' },
      { label: 'Network Requests Reduced', value: '60% via caching' },
      { label: 'Interactive Frametime', value: '≤ 12ms during redraw' }
    ],
    features: [
      'Interactive vector graphics driven by specialized D3 layouts.',
      'Background query polling routines ensuring synchronized state metrics.',
      'Zero-layout-shift UI built with predictive placeholder outlines.'
    ],
    codeFiles: [
      {
        name: 'useVisualPool.js',
        language: 'javascript',
        snippet: `import { useQuery } from '@tanstack/react-query';

export function useVisualPool(segmentId) {
  return useQuery({
    queryKey: ['analytics', segmentId],
    queryFn: async () => {
      const res = await fetch(\`/api/analytics/\${segmentId}\`);
      if (!res.ok) throw new Error('Data sync failed');
      return res.json();
    },
    staleTime: 1000 * 30, // 30 seconds
    refetchInterval: 1000 * 10, // polling
  });
}`
      }
    ]
  }
];
