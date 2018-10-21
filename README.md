# iPeek
</br>


## About
</br>

__iPeek__ is a command line utility designed to get geolocation about a given IP address (v4 or v6)
</br>
</br>


## Installing iPeek
</br>

iPeek can be installed using NPM:

```shell
npm install -g ipeek
```
</br>
</br>


## Using iPeek
</br>

Once you've installed iPeek globally using NPM, you're good to go!


iPeek has the following available options:

```bash
Usage: ipeek [options]

Options:

  -v, --version       output the version number
  --v4 <IP Address>   Get location data for a given IPV4 Address
  --v6 <IP Address>   Get location data for a given IPV6 Address
  --dns <IP Address>  Look up an IP address using DNS services
  -h, --help          output usage information
```

</br>
</br>


## Example
</br>

__V4 lookup example:__

```
$ ipeek --v4 8.8.8.8

Getting information for 8.8.8.8

Returned Information:

ip: 8.8.8.8
city: Mountain View
region: California
region_code: CA
country: US
country_name: United States
continent_code: NA
in_eu: false
postal: 94035
latitude: 37.386
longitude: -122.0838
timezone: America/Los_Angeles
utc_offset: -0700
country_calling_code: +1
currency: USD
languages: en-US,es-US,haw,fr
asn: AS15169
org: Google LLC
```
</br>
</br>


## Limitations
</br>

This project is __NOT__ meant to be used to look up _local_ IP addresses
</br>
</br>


## History
</br>

- **Alpha v0.0.3**
    - Fixed install issue

- **Alpha v0.0.1**
    - Initial release
</br>
</br>


## License
</br>

This project is licensed under the MIT License - see the LICENSE file for details