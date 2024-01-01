import os

import uvicorn

from auth_service.main import app

PORT = int(os.environ.get("PORT", 8000))

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=PORT, reload=False)
