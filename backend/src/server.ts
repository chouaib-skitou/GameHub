import 'dotenv/config';
import app from './app';

const PORT = process.env.PORT || 5000;

// For local development
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// For Vercel serverless deployment
export default app;

