from sqlalchemy import create_engine, inspect

DATABASE_URL = "sqlite:///./finance.db"
engine = create_engine(DATABASE_URL)

inspector = inspect(engine)
tables = inspector.get_table_names()

print("Tables in the database:")
for table in tables:
    print(table)