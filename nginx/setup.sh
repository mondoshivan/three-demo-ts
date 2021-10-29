#!/usr/bin/env bash

BASEDIR=$(dirname "$0")

if [ "$#" -ne 5 ]; then
  echo "Usage: ./nginx/setup.sh COUNTRY STATE CITY ENTERPRISE COMMON_NAME" >&2
  exit 1
fi

# Input arguments
COUNTRY=$1
STATE=$2
CITY=$3
ENTERPRISE=$4
COMMON_NAME=$5

# Create the directories
mkdir -p ${BASEDIR}/ssl/certs
mkdir -p ${BASEDIR}/ssl/private

# Get the users credentials.
sudo -v

# Create the certificates
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout ${BASEDIR}/ssl/private/ssl.key \
    -out ${BASEDIR}/ssl/certs/ssl.crt \
    -subj "/C=${COUNTRY}/ST=${STATE}/L=${CITY}/O=${ENTERPRISE}/CN=${COMMON_NAME}"
    
sudo openssl dhparam -out ${PWD}/nginx/ssl/certs/dhparam.pem 2048