from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base  # Import from models.py

DATABASE_URL = "sqlite:///./finance.db"  # SQLite file in current dir

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def init_db():
    Base.metadata.create_all(bind=engine)