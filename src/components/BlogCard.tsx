import { Link } from 'wouter';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  date: string;
  title: string;
  excerpt?: string;
  href?: string;
}

export function BlogCard({ date, title, excerpt = "Read more about our insights and industry updates.", href = "/blog" }: BlogCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center gap-2 text-sm text-brand-teal font-bold tracking-wide uppercase mb-4">
          <Calendar size={16} />
          {date}
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-coral transition-colors line-clamp-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 mb-8 line-clamp-3 flex-grow text-lg">
          {excerpt}
        </p>
        <Link href={href} className="mt-auto text-brand-coral font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-wider text-sm">
          Read More <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}