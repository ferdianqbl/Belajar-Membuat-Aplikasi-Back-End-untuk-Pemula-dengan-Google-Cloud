const cpu = process.memoryUsage();
console.log(cpu);
console.log(cpu.rss);
console.log(process.env.NODE_ENV);
