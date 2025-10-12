export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  link?: string;
  github?: string;
  features: string[];
  challenges: string[];
  outcomes: string[];
  timeline: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "ai-analytics-platform",
    title: "AI-Powered Analytics Platform",
    description: "Built a comprehensive analytics platform leveraging machine learning for predictive insights and automated data processing.",
    fullDescription: "Developed a comprehensive end-to-end analytics platform that leverages advanced machine learning algorithms to provide predictive insights and automate complex data processing workflows. The platform handles millions of data points daily, providing real-time analytics dashboards, automated reporting, and intelligent recommendations for business decision-making. Built with a microservices architecture for scalability and deployed on cloud infrastructure with auto-scaling capabilities.",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
    github: "#",
    link: "#",
    timeline: "6 months",
    role: "Lead Developer & ML Engineer",
    features: [
      "Real-time data processing pipeline handling 10M+ events per day",
      "Predictive analytics using ensemble models with 94% accuracy",
      "Interactive dashboards with customizable widgets and filters",
      "Automated report generation and email scheduling",
      "RESTful API with comprehensive documentation",
      "Role-based access control and audit logging"
    ],
    challenges: [
      "Optimized database queries to reduce response time from 8s to 200ms",
      "Implemented efficient caching strategy using Redis for frequently accessed data",
      "Scaled infrastructure to handle 10x traffic growth during peak hours",
      "Developed custom ML pipeline for model training and deployment automation"
    ],
    outcomes: [
      "Reduced manual analysis time by 85%",
      "Improved decision-making speed by 60%",
      "Successfully deployed to 500+ active users",
      "Achieved 99.9% uptime SLA over 12 months"
    ]
  },
  {
    id: "nlp-engine",
    title: "Natural Language Processing Engine",
    description: "Developed an NLP engine for sentiment analysis and text classification with 95% accuracy using transformer models.",
    fullDescription: "Created a sophisticated natural language processing engine capable of analyzing sentiment, classifying text into multiple categories, and extracting key entities from unstructured text data. The system uses state-of-the-art transformer models fine-tuned on domain-specific data, achieving industry-leading accuracy rates. Designed to process thousands of documents per second with a scalable architecture.",
    tags: ["NLP", "PyTorch", "FastAPI", "Docker", "Redis"],
    github: "#",
    timeline: "4 months",
    role: "NLP Engineer & Backend Developer",
    features: [
      "Multi-language sentiment analysis (English, Spanish, French)",
      "Named entity recognition with custom entity types",
      "Topic modeling and document clustering",
      "Real-time text classification API with sub-100ms latency",
      "Batch processing for large document sets",
      "Model versioning and A/B testing framework"
    ],
    challenges: [
      "Fine-tuned BERT model on 500K+ labeled examples for domain adaptation",
      "Implemented efficient batch processing to handle 10K documents/second",
      "Reduced model size by 60% while maintaining accuracy through quantization",
      "Built automated pipeline for continuous model improvement"
    ],
    outcomes: [
      "Achieved 95% accuracy on sentiment classification",
      "Processed 50M+ documents in production",
      "Reduced manual review workload by 70%",
      "Integrated with 5 major enterprise clients"
    ]
  },
  {
    id: "computer-vision-system",
    title: "Computer Vision System",
    description: "Created a real-time object detection system for industrial automation with custom-trained neural networks.",
    fullDescription: "Developed a real-time computer vision system for automated quality control in manufacturing. The system uses custom-trained neural networks to detect defects and anomalies on production lines with high precision. Deployed on edge devices for low-latency inference, the solution processes video streams at 60 FPS while maintaining exceptional accuracy even in challenging lighting conditions.",
    tags: ["OpenCV", "YOLO", "Python", "Edge Computing", "TensorFlow"],
    link: "#",
    timeline: "5 months",
    role: "Computer Vision Engineer",
    features: [
      "Real-time object detection at 60 FPS on edge devices",
      "Custom defect classification for 20+ defect types",
      "Automated alert system for critical defects",
      "Historical analytics and reporting dashboard",
      "Integration with existing manufacturing systems",
      "Remote monitoring and model updates"
    ],
    challenges: [
      "Optimized model for edge deployment reducing inference time by 5x",
      "Handled variable lighting conditions using advanced preprocessing",
      "Collected and annotated 100K+ images for training dataset",
      "Achieved 98% detection accuracy with <2% false positive rate"
    ],
    outcomes: [
      "98% defect detection accuracy in production",
      "Reduced quality control costs by 45%",
      "Prevented 1000+ defective products from shipping",
      "Deployed across 15 production lines"
    ]
  },
  {
    id: "recommendation-algorithm",
    title: "Recommendation Algorithm",
    description: "Designed and implemented a collaborative filtering recommendation system serving millions of users.",
    fullDescription: "Built a scalable recommendation system that serves personalized content to millions of users in real-time. The system combines collaborative filtering, content-based filtering, and deep learning approaches to provide highly relevant recommendations. Implemented using distributed computing frameworks to handle massive scale, with sophisticated A/B testing infrastructure to continuously improve recommendation quality.",
    tags: ["Machine Learning", "Spark", "Scala", "Redis", "Kafka"],
    github: "#",
    link: "#",
    timeline: "8 months",
    role: "ML Engineer & Data Scientist",
    features: [
      "Hybrid recommendation engine combining multiple algorithms",
      "Real-time recommendation updates based on user behavior",
      "Personalized ranking with diversity optimization",
      "Cold start handling for new users and items",
      "Distributed training on 10TB+ interaction data",
      "A/B testing framework for model evaluation"
    ],
    challenges: [
      "Scaled system to handle 5M+ users with <50ms response time",
      "Implemented incremental learning for real-time model updates",
      "Balanced relevance and diversity in recommendations",
      "Built efficient feature store for rapid feature computation"
    ],
    outcomes: [
      "Increased user engagement by 35%",
      "Improved click-through rate by 28%",
      "Serving 100M+ recommendations daily",
      "Reduced recommendation latency from 200ms to 45ms"
    ]
  },
  {
    id: "data-pipeline",
    title: "Automated Data Pipeline",
    description: "Built a scalable ETL pipeline that processes and transforms data from multiple sources.",
    fullDescription: "Designed and implemented a robust, fault-tolerant ETL pipeline that ingests data from 20+ heterogeneous sources, performs complex transformations, validates data quality, and loads it into a centralized data warehouse. The pipeline handles both batch and streaming data with automatic retry mechanisms, comprehensive monitoring, and alerting systems.",
    tags: ["Apache Airflow", "Python", "AWS", "PostgreSQL", "Kubernetes"],
    github: "#",
    timeline: "5 months",
    role: "Data Engineer & DevOps",
    features: [
      "Orchestrated 100+ DAGs processing 5TB+ data daily",
      "Real-time data validation and quality checks",
      "Automated data lineage tracking",
      "Configurable retry and error handling mechanisms",
      "Comprehensive monitoring and alerting dashboard",
      "Data versioning and rollback capabilities"
    ],
    challenges: [
      "Migrated legacy ETL processes with zero downtime",
      "Implemented idempotent pipeline design for reliable retries",
      "Optimized transformations reducing processing time by 70%",
      "Built custom operators for domain-specific tasks"
    ],
    outcomes: [
      "Reduced data processing time from 8 hours to 45 minutes",
      "Achieved 99.95% pipeline success rate",
      "Eliminated manual data intervention",
      "Enabled data freshness within 5 minutes for critical datasets"
    ]
  },
  {
    id: "realtime-chat",
    title: "Real-Time Chat Application",
    description: "Developed a real-time messaging platform with end-to-end encryption and support for multimedia content.",
    fullDescription: "Built a modern, secure messaging platform supporting real-time communication for thousands of concurrent users. Features include end-to-end encryption, multimedia messaging, typing indicators, read receipts, and group chats. The system uses WebSocket for real-time communication and is designed for high availability with automatic failover and load balancing.",
    tags: ["Node.js", "WebSocket", "React", "MongoDB", "Redis"],
    link: "#",
    github: "#",
    timeline: "6 months",
    role: "Full-Stack Developer",
    features: [
      "Real-time messaging with WebSocket connections",
      "End-to-end encryption for secure communication",
      "File sharing with preview generation",
      "Group chats with admin controls",
      "Typing indicators and read receipts",
      "Push notifications for offline messages"
    ],
    challenges: [
      "Implemented efficient message storage handling 1M+ messages/day",
      "Built presence system showing real-time user online status",
      "Optimized WebSocket connections to support 10K concurrent users",
      "Developed reliable message delivery with offline sync"
    ],
    outcomes: [
      "Successfully launched to 50K+ active users",
      "Average message delivery time under 100ms",
      "99.9% message delivery success rate",
      "4.8/5 user satisfaction rating"
    ]
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Created a full-stack e-commerce solution with advanced search, recommendation engine, and payment integration.",
    fullDescription: "Developed a complete e-commerce platform from the ground up, featuring advanced product search with Elasticsearch, personalized recommendations, secure payment processing with Stripe, and a responsive admin dashboard. The platform is optimized for performance with server-side rendering, lazy loading, and efficient caching strategies.",
    tags: ["React", "Node.js", "Stripe", "MongoDB", "AWS"],
    link: "#",
    timeline: "7 months",
    role: "Full-Stack Developer & Team Lead",
    features: [
      "Advanced product search with filters and facets",
      "Personalized product recommendations",
      "Secure payment processing with multiple gateways",
      "Inventory management system",
      "Order tracking and notification system",
      "Responsive admin dashboard with analytics"
    ],
    challenges: [
      "Optimized page load time to under 2 seconds",
      "Implemented complex discount and coupon logic",
      "Built real-time inventory sync across multiple warehouses",
      "Ensured PCI compliance for payment handling"
    ],
    outcomes: [
      "Processed $2M+ in transactions in first year",
      "Achieved 3.5% conversion rate",
      "Reduced cart abandonment by 25%",
      "Scaled to 100K+ monthly active users"
    ]
  },
  {
    id: "voice-assistant",
    title: "Voice Assistant Integration",
    description: "Built a voice-controlled assistant using speech recognition and natural language understanding.",
    fullDescription: "Created an intelligent voice assistant that understands natural language commands and integrates with multiple smart home devices and services. The system uses advanced speech recognition, natural language understanding, and text-to-speech technologies to provide a seamless voice-controlled experience. Supports multiple languages and can handle complex, multi-step commands.",
    tags: ["Python", "Speech Recognition", "NLP", "IoT", "FastAPI"],
    github: "#",
    timeline: "4 months",
    role: "AI Developer & IoT Engineer",
    features: [
      "Natural language command processing",
      "Multi-language speech recognition (5 languages)",
      "Smart home device integration (15+ device types)",
      "Context-aware conversation handling",
      "Custom wake word detection",
      "Voice profile management for personalization"
    ],
    challenges: [
      "Achieved 92% intent recognition accuracy",
      "Reduced speech-to-text latency to under 500ms",
      "Handled noisy environment audio processing",
      "Built device discovery and pairing system"
    ],
    outcomes: [
      "Successfully integrated with 15+ device brands",
      "92% user command success rate",
      "Average response time under 1 second",
      "Deployed to 5K+ households"
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
