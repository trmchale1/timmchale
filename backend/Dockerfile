FROM python:3.10-bookworm

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY ./ /app/

EXPOSE 8000